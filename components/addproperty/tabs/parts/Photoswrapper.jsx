'use client'
import Propertyapi from "@/components/api/Propertyapi";
import Errorpanel from "@/components/shared/Errorpanel";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { useUserDetails } from "@/components/zustand/useUserDetails";
import { Modal } from "@nayeshdaggula/tailify";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Photoswrapper({ updateActiveTab }) {
  const userInfo = useUserDetails((state) => state.userInfo)
  let user_id = userInfo?.user_id || null
  let access_token = userInfo?.access_token || null

  const searchParams = useSearchParams()
  const unique_property_id = searchParams.get('unique_property_id')
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [featuredIndex, setFeaturedIndex] = useState(null);

  const handleFileUpload = (event) => {
    // Allow only jpg, jpeg, png, gif extensions
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const uploadedFiles = Array.from(event.target.files);

    // Filter invalid files
    const invalidFiles = uploadedFiles.filter((file) => !allowedExtensions.test(file.name));
    if (invalidFiles.length > 0) {
      toast.error('Please upload only jpg, jpeg, png, gif files', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    }

    // Update file state
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

    // Create previews
    const newPreviews = uploadedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const removePreview = (index) => {
    const newPreviews = [...previews];
    const filteredPreviews = newPreviews.filter((_, i) => i !== index);
    setPreviews(filteredPreviews);

    const newFiles = [...files];
    const filteredFiles = newFiles.filter((_, i) => i !== index);
    setFiles(filteredFiles);

    if (featuredIndex === index) {
      setFeaturedIndex(null);
    } else if (featuredIndex > index) {
      setFeaturedIndex(featuredIndex - 1);
    }
  }

  const handleSetFeatured = (index) => {
    setFeaturedIndex(index);
  };

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const closeErrorModal = () => setErrorModalOpen(false);
  const [errorMessages, setErrorMessages] = useState('');
  const [isLoadingEffect, setIsLoadingEffect] = useState(false);

  const handleSubmitPhotos = () => {
    setIsLoadingEffect(true);
    if (previews.length === 0) {
      setIsLoadingEffect(false);
      toast.error('Please upload atleat one photo', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return false;
    }
    if (!featuredIndex || featuredIndex === -1) {
      setIsLoadingEffect(false);
      toast.error('Please select a featured image', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    }
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('unique_property_id', unique_property_id);
    formData.append("featured_image", files[featuredIndex]);
    files.forEach((file) => {
      formData.append("photo", file);
    });

    Propertyapi.post('addphotos', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        const data = response.data;
        if (data.status === 'error') {
          const finalResponse = {
            message: data.message,
            server_res: data.server_res
          };
          setErrorMessages(finalResponse)
          setErrorModalOpen(true);
          setIsLoadingEffect(false);
          return;
        }
        updateActiveTab('review', 'inprogress', unique_property_id)
        toast.success('Photos uploaded successfully');
        setIsLoadingEffect(false);
      })
      .catch(error => {
        const errorDetails = {
          message: error.message,
          server_res: error.response ? error.response.data : null
        };
        setErrorMessages(errorDetails);
        setErrorModalOpen(true);
        setIsLoadingEffect(false);
      });
  }

  // async function getPropertyPhotos() {
  //   Propertyapi.get('/getphotos', {
  //     params: {
  //       unique_property_id: unique_property_id,
  //       user_id: user_id
  //     }
  //   }, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${access_token}`
  //     }
  //   })
  //     .then((response) => {
  //       if (response.data.status === 'error') {
  //         let finalResponse = {
  //           'message': response.data.message,
  //         }
  //         console.log('finalResponse', finalResponse)
  //       }
  //       setFiles(response?.data?.images || []);
  //       setPreviews(response?.data?.images || []);
  //       setFeaturedIndex(response?.data?.featuredImageIndex ?? null);
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getPropertyPhotos()
  // }, [])

  const fetchImageAsFile = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const filename = imageUrl.split('/').pop();  // Extract the filename from the URL

    return new File([blob], filename, { type: blob.type });
  };

  // Function to handle getting property photos and converting URLs to File objects
  async function getPropertyPhotos() {
    try {
      const response = await Propertyapi.get('/getphotos', {
        params: {
          unique_property_id: unique_property_id,
          user_id: user_id
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        }
      });

      if (response.data.status === 'error') {
        console.log('Error:', response.data.message);
        return;
      }

      // Convert URLs to File objects and update the state
      const imageFiles = await Promise.all(response.data.images.map(fetchImageAsFile));
      setFiles(imageFiles);  // Store the File objects in the state
      setPreviews(response.data.images);  // Store the URLs for previews
      setFeaturedIndex(response.data.featuredImageIndex ?? null);
    } catch (error) {
      console.log('Error fetching property photos:', error);
    }
  }

  useEffect(() => {
    getPropertyPhotos();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="py-2 bg-[#E2EAED]">
          <p className="text-lg font-bold text-[#1D3A76] text-center font-sans">
            Add Photos
          </p>
        </div>
        <div className="px-5 py-3">
          <div className="mt-3 overflow-y-auto h-[calc(100vh-243px)]">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {/*  */}
                  <p className="mb-2 text-sm text-gray-500">
                    Drag & Drop or click to upload
                  </p>
                  <p className="text-xs text-gray-500">
                    Allowed Extensions (jpg, jpeg, png, gif)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {
                previews.length > 0 &&
                previews.map((preview, index) => (
                  <div
                    key={index}
                    className="relative group border border-gray-300 p-2 rounded"
                  >
                    <Image
                      src={preview}
                      alt={`Preview ${index}`}
                      className="w-full h-40 object-cover rounded"
                      height={160}
                      width={160}
                    />
                    <div className="flex flex-row items-center justify-center">
                      <button
                        onClick={() => handleSetFeatured(index)}
                        className={`px-3 rounded-md py-2 my-2 text-xs text-center ${featuredIndex === index ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                          }`}
                      >
                        {featuredIndex === index ? "✔ Featured Image" : "Set as Featured Image"}
                      </button>
                    </div>
                    <button
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removePreview(index)}
                    >
                      ✕
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center  px-6 py-3'>
          <div onClick={() => updateActiveTab('address', 'completed', unique_property_id)} className='bg-[#000] px-8 py-2 rounded-md cursor-pointer'>
            <p className='text-white text-[10px]'>Back</p>
          </div>
          {
            previews.length > 0 ?
              <div onClick={handleSubmitPhotos} className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
                <p className='text-white text-[10px]'>Next, Review</p>
              </div>
              :
              <div onClick={() => updateActiveTab('review', 'inprogress', unique_property_id)} className='text-center cursor-pointer'>
                <p className='text-[#757575] text-xs underline pb-2 font-semibold'>Continue without photos</p>
              </div>
          }
        </div>
      </div>

      <LoadingOverlay isLoading={isLoadingEffect} />

      {errorModalOpen &&
        <Modal
          open={errorModalOpen}
          onClose={closeErrorModal}
          size="md"
          zIndex={9999}
        >
          <Errorpanel
            errorMessages={errorMessages}
            close={closeErrorModal}
          />
        </Modal>
      }
    </>
  );
}

export default Photoswrapper;

