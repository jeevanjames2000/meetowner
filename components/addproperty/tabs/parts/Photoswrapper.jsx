'use client'
import Propertyapi from "@/components/api/Propertyapi";
import Errorpanel from "@/components/shared/Errorpanel";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { useUserDetails } from "@/components/zustand/useUserDetails";
import { Modal, Select } from "@nayeshdaggula/tailify";
import { IconBookmark, IconX } from "@tabler/icons-react";
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

    // Filter invalid files by extension
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
      });
      return;
    }

    // Filter valid files (size <= 10MB)
    const validFiles = uploadedFiles.filter((file) => file.size <= 10 * 1024 * 1024);

    // Notify about oversized files
    const oversizedFiles = uploadedFiles.filter((file) => file.size > 10 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toast.error('Some files were not uploaded because they exceed 10MB', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // Update file state with valid files only
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);

    // Create previews for valid files
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
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

  const [videoFiles, setVideoFiles] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [videoTypes, setVideoTypes] = useState({});

  const handleVideoUpload = (event) => {
    // Allow only mp4 extensions
    const allowedExtensions = /(\.mp4)$/i;
    const uploadedFiles = Array.from(event.target.files);

    // const invalidFiles = uploadedFiles.filter((file) => !allowedExtensions.test(file.name));
    // if (invalidFiles.length > 0) {
    //   toast.error('Please upload only mp4 files', {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   return;
    // }
    // const validFiles = uploadedFiles.filter((file) => file.size <= 10 * 1024 * 1024);
    // const oversizedFiles = uploadedFiles.filter((file) => file.size > 10 * 1024 * 1024);
    // if (oversizedFiles.length > 0) {
    //   toast.error('Some files were not uploaded because they exceed 10MB', {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }

    // Update file state with valid files only
    setVideoFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

    // Create previews for valid files
    const newPreviews = uploadedFiles.map((file) => URL.createObjectURL(file));
    setVideoPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleVideoTypeChange = (index, value) => {
    setVideoTypes((prev) => ({
      ...prev,
      [index]: value, // Update the type for the specific video
    }));
  };

  const removeVideoPreview = (index) => {
    setVideoPreviews((prev) => prev.filter((_, i) => i !== index)); // Remove the video preview
    setVideoTypes((prev) => {
      const updated = { ...prev };
      delete updated[index]; // Remove the video type for the deleted preview
      return updated;
    });
    setVideoFiles((prev) => prev.filter((_, i) => i !== index)); // Remove the video file
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
    if (featuredIndex === null || featuredIndex === -1) {
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

    videoFiles.forEach((file) => {
      formData.append("video", file);
    });

    Object.entries(videoTypes).forEach(([index, type]) => {
      formData.append(`video_type[${index}]`, type);
    });

    Propertyapi.post('addphotosvideos', formData, {
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

  const fetchImageAsFile = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const filename = imageUrl.split('/').pop();  // Extract the filename from the URL

    return new File([blob], filename, { type: blob.type });
  };

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

  async function getPropertyVideos() {
    try {
      const response = await Propertyapi.get('/getpropertyvideos', {
        params: {
          unique_property_id: unique_property_id,
          user_id: user_id
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        }
      });

      const data = response.data;
      if (data.status === 'error') {
        const finalResponse = {
          message: data.message,
          server_res: data.server_res
        };
        setErrorMessages(finalResponse);
        setErrorModalOpen(true);
        setIsLoadingEffect(false);
        return;
      }

      // Convert URLs to File objects and update the state
      const videoFiles = await Promise.all(data.videos.map(fetchImageAsFile));
      setVideoFiles(videoFiles);  // Store the File objects in the state
      setVideoPreviews(data.videos);  // Store the URLs for previews
      // setVideoTypes(data.videoTypes);  // Store the video types

    } catch (error) {
      const errorDetails = {
        message: error.message,
        server_res: error.response ? error.response.data : null
      };
      setErrorMessages(errorDetails);
      setErrorModalOpen(true);
      setIsLoadingEffect(false);
    }
  }

  useEffect(() => {
    getPropertyPhotos();
    getPropertyVideos()
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
            <div className="flex items-center gap-3 justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {/*  */}
                  <p className="text-sm text-gray-500 text-center px-3">
                    Upload photos of max size 10 MB in format JPG, JPEG & PNG
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
              <label
                htmlFor="dropzone-video-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {/*  */}
                  <p className="text-sm text-gray-500 text-center px-3">
                    Upload Videos in format MP4,
                  </p>
                </div>
                <input
                  id="dropzone-video-file"
                  type="file"
                  accept=".mp4"
                  multiple
                  onChange={handleVideoUpload}
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
                      height={140}
                      width={140}
                    />
                    <div className="absolute top-2 left-2" onClick={() => handleSetFeatured(index)}>
                      <div className={`flex flex-row justify-between items-center gap-2 text-white rounded-md p-1 text-xs cursor-pointer ${featuredIndex === index ? "bg-[#1D3A76]" : "bg-[#699ba0]"}`}>
                        <p className="text-[10px]">Set as Featured Image</p>
                        <IconBookmark size={12} />
                      </div>
                    </div>
                    <div
                      className="absolute top-2 right-2 bg-[#1D3A76] text-white rounded-full p-1 text-xs cursor-pointer"
                      onClick={() => removePreview(index)}
                    >
                      <IconX size={12} />
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {
                videoPreviews.length > 0 &&
                videoPreviews.map((preview, index) => (
                  <div
                    key={index}
                    className="relative group border border-gray-300 p-2 rounded"
                  >
                    <video
                      src={preview}
                      className="w-full h-40 object-cover rounded"
                      controls
                    />
                    <Select
                      value={videoTypes[index] || 'video'}
                      data={[
                        { value: 'video', label: 'Video' },
                        { value: 'short', label: 'Short' }
                      ]}
                      onChange={(value) => handleVideoTypeChange(index, value)}
                      className="m-0 p-0"
                    />
                    <div
                      className="absolute top-2 right-2 bg-[#1D3A76] text-white rounded-full p-1 text-xs cursor-pointer"
                      onClick={() => removeVideoPreview(index)}
                    >
                      <IconX size={12} />
                    </div>
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
                <p className='text-white text-[10px] font-bold'>Next: Review</p>
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

