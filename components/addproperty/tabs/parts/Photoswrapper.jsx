'use client'
import Propertyapi from "@/components/api/Propertyapi";
import Errorpanel from "@/components/shared/Errorpanel";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { useUserDetails } from "@/components/zustand/useUserDetails";
import { Modal, Select } from "@nayeshdaggula/tailify";
import { IconArrowNarrowLeft, IconBookmark, IconX } from "@tabler/icons-react";
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
  const handleVideoUpload = (event) => {
    // Allow only mp4 extensions
    const allowedExtensions = /(\.mp4)$/i;
    const uploadedFiles = Array.from(event.target.files);

    const invalidFiles = uploadedFiles.filter((file) => !allowedExtensions.test(file.name));
    // Filter invalid files by extension
    if (invalidFiles.length > 0) {
      toast.error('Please upload only mp4 files', {
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

    // allow 10Mb file size
    const validFiles = uploadedFiles.filter((file) => file.size <= 30 * 1024 * 1024);

    // Notify about oversized files
    const oversizedFiles = uploadedFiles.filter((file) => file.size > 30 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      toast.error('Some video files were not uploaded because they exceed 10MB', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // Map uploaded files to include the videotype key
    const filesWithVideoType = validFiles.map((file) => ({
      file,
      videotype: 'video', // Default value for videotype
    }));

    // Update state with the new file objects
    setVideoFiles((prevFiles) => [...prevFiles, ...filesWithVideoType]);

    // Create previews for valid files
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setVideoPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleVideoTypeChange = (index, value) => {
    setVideoFiles((prev) => {
      const updated = [...prev];
      updated[index].videotype = value;
      return updated;
    });
  };

  const removeVideoPreview = (index, video_id) => {
    const newPreviews = [...videoPreviews];
    const filteredPreviews = newPreviews.filter((_, i) => i !== index);
    setVideoPreviews(filteredPreviews);

    const newFiles = [...videoFiles];
    const filteredFiles = newFiles.filter((_, i) => i !== index);
    setVideoFiles(filteredFiles);
  };

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const closeErrorModal = () => setErrorModalOpen(false);
  const [errorMessages, setErrorMessages] = useState('');
  const [isLoadingEffect, setIsLoadingEffect] = useState(false);

  const handleSubmitPhotosVideos = () => {
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
      formData.append("video", file.file);
      formData.append("video_type", file.videotype);
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
    Propertyapi.get('getpropertyvideos', {
      params: {
        unique_property_id: unique_property_id,
        user_id: user_id
      },
    })
      .then((response) => {
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

        const videoFilesData = data.videos.map((video) => ({
          file: new File([], video.url.split('/').pop()),
          videotype: video.type,
          video_id: video.id
        }));
        setVideoFiles(videoFilesData);
        const videoPreviews = data.videos.map((video) => ({
          url: video.url,
          type: video.type,
          video_id: video.id
        }

        ));
        setVideoPreviews(videoPreviews);
      }
      )
      .catch((error) => {
        let finalResponse = {
          'message': error.message,
        }
        setErrorMessages(finalResponse)
        setErrorModalOpen(true)
        setIsLoadingEffect(false)
      }
      )
  }

  useEffect(() => {
    getPropertyPhotos();
    getPropertyVideos()
  }, []);

  return (
    <>
      <div className="relative photoswrapper">
        <div className="py-2 bg-[#E2EAED]">
          <div className='flex justify-start items-center px-5'>
            <div className='w-9 cursor-pointer' onClick={() => updateActiveTab('address', 'completed', unique_property_id)}>
              <IconArrowNarrowLeft size={18} color='#1D3A76' />
            </div>
            <p className=" w-full text-lg font-bold text-[#1D3A76] text-center font-sans">
              ADD PHOTOS
            </p>
          </div>
        </div>
        <div className="px-10 py-3">
          <div className="overflow-y-auto h-[calc(100vh-243px)]">
            <div className="flex items-center gap-3 justify-center w-full mt-6">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center py-5 h-[180px]">
                  {/*  */}
                  <svg width="220" height="130" viewBox="0 0 270 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M269.705 143.446C269.705 143.446 238.946 153.79 129.122 153.79C19.2976 153.79 0 143.788 0 143.788L269.705 143.446Z" fill="#E8E8E8" />
                    <path d="M57.841 143.63H200.53C200.53 143.63 219.754 88.0968 174.43 91.2738C174.43 91.2738 170.639 53.1772 131.397 53.1772C92.1556 53.1772 86.6051 94.6263 86.6051 94.6263C86.6051 94.6263 39.5177 81.2209 57.841 143.63Z" fill="#FFFEFD" />
                    <path d="M160.965 84.514L156.979 87.1831C156.383 86.352 155.725 85.5663 155.012 84.8326C154.145 83.9166 153.219 83.0575 152.242 82.2605L152.075 82.122C147.955 78.7893 143.051 76.5641 137.83 75.6571H137.673C135.851 75.3508 134.006 75.1963 132.159 75.1954H131.933C130.723 75.1954 129.567 75.2354 128.465 75.3154C126.844 75.4215 125.232 75.622 123.635 75.9157C123.196 75.9942 122.762 76.082 122.342 76.1789C121.63 76.3313 120.956 76.5068 120.277 76.6915C118.793 77.1073 117.34 77.6258 115.927 78.2431C114.8 78.7354 113.705 79.2984 112.649 79.9286L112.187 80.2056C111.328 80.7448 110.498 81.3306 109.703 81.9604C109.034 82.4954 108.394 83.0657 107.786 83.669C107.662 83.789 107.542 83.9091 107.431 84.0291C106.538 84.9201 105.762 85.9209 105.122 87.0076L100.883 84.7634C101.766 83.2371 102.853 81.8388 104.115 80.6074C104.66 80.0486 105.279 79.4576 105.985 78.8572C106.964 78.0208 107.996 77.2495 109.075 76.5484C109.536 76.2436 109.998 75.9434 110.525 75.6248C111.051 75.3062 111.624 75.0014 112.21 74.7013C114.721 73.4299 117.368 72.4507 120.102 71.7828C120.305 71.732 120.513 71.6812 120.73 71.6351C121.261 71.5104 121.806 71.3903 122.36 71.2841C123.887 70.9884 125.428 70.7711 126.978 70.633C127.8 70.5545 128.659 70.4991 129.531 70.4622L130.247 70.4345C130.811 70.4345 131.383 70.4067 131.979 70.4067H132.598C133.304 70.4067 133.983 70.4483 134.662 70.4945C135.124 70.5268 135.585 70.5637 136.047 70.6099H136.301C142.651 71.2831 148.707 73.6339 153.849 77.4211C154.472 77.8829 155.058 78.3447 155.599 78.8065C156.569 79.6123 157.494 80.471 158.369 81.3786C159.317 82.3527 160.185 83.4012 160.965 84.514Z" fill="#272742" />
                    <path d="M62.1049 136.962C61.3106 134.429 60.8814 131.797 60.8304 129.144C60.8304 128.838 60.7087 128.544 60.4922 128.327C60.2757 128.111 59.9821 127.989 59.6759 127.989C59.3697 127.989 59.0761 128.111 58.8596 128.327C58.6431 128.544 58.5215 128.838 58.5215 129.144C58.5709 131.995 59.0265 134.825 59.8745 137.548C59.9541 137.844 60.1479 138.096 60.4134 138.249C60.6788 138.402 60.9941 138.443 61.2898 138.363C61.5856 138.283 61.8376 138.09 61.9905 137.824C62.1433 137.559 62.1845 137.243 62.1049 136.948V136.962Z" fill="#E4F4F4" />
                    <path d="M137.692 105.995H134.492V117.484C134.492 118.245 134.19 118.974 133.652 119.512C133.115 120.05 132.385 120.352 131.625 120.352H129.251C128.491 120.352 127.761 120.05 127.223 119.512C126.686 118.974 126.384 118.245 126.384 117.484V105.995H123.183C122.898 105.994 122.618 105.916 122.372 105.769C122.127 105.623 121.925 105.413 121.789 105.162C121.652 104.911 121.585 104.628 121.595 104.343C121.604 104.057 121.691 103.779 121.844 103.538L129.099 92.2619C129.243 92.0379 129.441 91.8537 129.675 91.7261C129.909 91.5986 130.171 91.5317 130.438 91.5317C130.704 91.5317 130.967 91.5986 131.201 91.7261C131.435 91.8537 131.633 92.0379 131.777 92.2619L139.022 103.538C139.177 103.778 139.265 104.056 139.276 104.341C139.286 104.626 139.221 104.909 139.085 105.16C138.949 105.412 138.748 105.622 138.503 105.768C138.258 105.915 137.978 105.994 137.692 105.995Z" fill="#46C1B5" />
                    <path d="M160.573 129.985H100.598V116.515C100.598 116.014 100.797 115.533 101.151 115.179C101.505 114.825 101.985 114.626 102.486 114.626H104.246C104.747 114.626 105.228 114.825 105.583 115.179C105.938 115.533 106.138 116.013 106.139 116.515V124.443H155.032V116.515C155.033 116.013 155.233 115.533 155.588 115.179C155.943 114.825 156.424 114.626 156.925 114.626H158.685C159.185 114.626 159.666 114.825 160.02 115.179C160.374 115.533 160.573 116.014 160.573 116.515V129.985Z" fill="#46C1B5" />
                    <path d="M137.691 106.965H134.491V118.454C134.491 119.215 134.189 119.944 133.651 120.482C133.114 121.02 132.384 121.322 131.624 121.322H129.25C128.49 121.322 127.76 121.02 127.222 120.482C126.685 119.944 126.382 119.215 126.382 118.454V106.965H123.182C122.897 106.965 122.616 106.888 122.371 106.742C122.125 106.596 121.924 106.387 121.787 106.136C121.65 105.885 121.583 105.602 121.593 105.317C121.603 105.031 121.689 104.754 121.843 104.513L129.098 93.2321C129.242 93.0081 129.44 92.8239 129.674 92.6964C129.908 92.5688 130.17 92.502 130.437 92.502C130.703 92.502 130.965 92.5688 131.199 92.6964C131.433 92.8239 131.632 93.0081 131.776 93.2321L139.021 104.513C139.175 104.753 139.261 105.03 139.272 105.315C139.282 105.599 139.216 105.881 139.08 106.132C138.944 106.382 138.744 106.592 138.499 106.738C138.255 106.885 137.976 106.963 137.691 106.965Z" fill="#56D8CF" />
                    <path d="M160.573 130.954H100.598V117.489C100.597 117.24 100.645 116.994 100.74 116.764C100.835 116.535 100.974 116.326 101.149 116.15C101.325 115.974 101.533 115.835 101.762 115.739C101.992 115.644 102.238 115.595 102.486 115.595H104.246C104.748 115.595 105.229 115.795 105.584 116.15C105.94 116.505 106.139 116.986 106.139 117.489V125.413H155.032V117.489C155.032 116.986 155.231 116.505 155.586 116.15C155.941 115.795 156.423 115.595 156.925 115.595H158.685C158.933 115.595 159.179 115.644 159.408 115.739C159.638 115.835 159.846 115.974 160.022 116.15C160.197 116.326 160.336 116.535 160.431 116.764C160.525 116.994 160.574 117.24 160.573 117.489V130.954Z" fill="#56D8CF" />
                    <path d="M124.514 20.1465L101.91 43.9926C105.95 43.3379 110.072 43.3957 114.092 44.1635C116.05 44.5329 118.068 45.124 119.458 46.5416C121.305 48.4303 121.633 51.2795 121.767 53.9301C121.877 55.8295 121.95 57.7274 121.984 59.6238C121.984 60.3072 121.984 61.0091 121.984 61.674H122.261C124.57 61.5955 126.878 61.5032 129.187 61.4201C132.461 61.3046 135.781 61.1938 138.885 62.1358C141.291 62.8141 143.396 64.2891 144.855 66.3195C147.306 67.4186 149.605 68.8295 151.694 70.5171L151.861 70.6556L155.162 67.1738L164.148 57.7397L124.514 20.1465ZM123.498 33.538C124.534 32.4437 125.871 31.6812 127.34 31.347C128.809 31.0128 130.344 31.1219 131.751 31.6606C133.158 32.1992 134.374 33.1432 135.244 34.373C136.115 35.6028 136.601 37.0632 136.641 38.5693C136.681 40.0755 136.273 41.5596 135.47 42.834C134.666 44.1084 133.502 45.1157 132.126 45.7285C130.749 46.3412 129.222 46.5319 127.737 46.2763C126.252 46.0208 124.877 45.3305 123.785 44.2928C122.319 42.9033 121.466 40.9886 121.412 38.9701C121.359 36.9515 122.109 34.9942 123.498 33.5288V33.538Z" fill="#FFC533" />
                    <path d="M126.42 18.1379L124.075 15.9121L92.3828 49.3493L108.73 64.8512L112.332 68.2683C113.388 67.6381 114.483 67.0752 115.61 66.5828L111.865 63.0318L97.1206 49.0538L101.923 43.9743L124.527 20.1281L164.147 57.7398L155.212 67.1693L151.91 70.6511C152.888 71.448 153.814 72.3072 154.681 73.2232L157.983 69.7414L168.802 58.3309L126.42 18.1379Z" fill="#F6FAFD" />
                    <path d="M144.906 66.3007C142.545 65.2462 140.064 64.4863 137.517 64.038H137.36C135.538 63.7317 133.694 63.5772 131.847 63.5762H131.62C130.411 63.5762 129.255 63.6163 128.152 63.6963C126.532 63.8024 124.919 64.0029 123.322 64.2966C122.884 64.3751 122.45 64.4629 122.029 64.5598C122.029 63.6086 122.029 62.6573 122.029 61.706H122.306C124.615 61.6275 126.924 61.5352 129.233 61.4521C132.507 61.3366 135.827 61.2258 138.93 62.1678C141.331 62.8319 143.437 64.2884 144.906 66.3007Z" fill="#56D8CF" />
                    <path d="M122.019 61.6646C122.019 62.6158 122.019 63.5671 122.019 64.5183C121.308 64.6707 120.634 64.8462 119.955 65.0309C118.471 65.4467 117.017 65.9652 115.605 66.5825L111.86 63.0314L97.1152 49.0534L101.918 43.9739C105.957 43.3192 110.08 43.377 114.099 44.1448C116.057 44.5142 118.075 45.1053 119.465 46.5229C121.312 48.4116 121.64 51.2607 121.774 53.9113C121.885 55.8108 121.957 57.7087 121.991 59.605C122.014 60.2977 122.019 60.9719 122.019 61.6646Z" fill="#38B2AC" />
                    <path d="M134.266 33.2283C135.361 34.2636 136.124 35.6005 136.46 37.0698C136.795 38.5392 136.687 40.0749 136.15 41.4829C135.612 42.8909 134.669 44.1078 133.44 44.9798C132.21 45.8518 130.75 46.3396 129.244 46.3816C127.737 46.4236 126.252 46.0178 124.976 45.2157C123.7 44.4136 122.691 43.251 122.076 41.8752C121.461 40.4993 121.267 38.972 121.52 37.4862C121.773 36.0005 122.461 34.6232 123.497 33.5285C124.184 32.8008 125.007 32.2157 125.921 31.8068C126.834 31.3978 127.819 31.1729 128.819 31.145C129.819 31.1172 130.815 31.2868 131.75 31.6443C132.684 32.0018 133.539 32.54 134.266 33.2283Z" fill="#FF5331" />
                    <path d="M159.992 16.1522L154.081 41.2359C153.347 40.0491 152.631 38.867 151.897 37.6848C151.274 36.5447 150.497 35.4958 149.588 34.5678C147.228 32.3236 143.585 31.8849 140.403 32.6376C137.222 33.3903 134.4 35.1589 131.652 36.9044L125.793 40.5986L125.557 40.7418C124.259 38.516 122.883 36.3272 121.456 34.1707C120.03 32.0142 118.284 29.6638 115.73 28.9619C113.819 28.4401 111.778 28.9619 109.898 29.613C106.035 30.9697 102.441 32.9938 99.2773 35.593L106.814 3.61035L159.992 16.1522ZM127.51 19.1907C127.856 17.7252 127.76 16.19 127.233 14.7794C126.706 13.3687 125.773 12.1458 124.552 11.2653C123.33 10.3848 121.875 9.88619 120.371 9.83252C118.866 9.77885 117.379 10.1725 116.098 10.9638C114.817 11.755 113.799 12.9083 113.173 14.2779C112.547 15.6475 112.342 17.1718 112.582 18.6582C112.823 20.1447 113.498 21.5265 114.524 22.6289C115.549 23.7314 116.879 24.505 118.344 24.8521C119.318 25.0833 120.327 25.1202 121.315 24.9607C122.303 24.8013 123.25 24.4485 124.101 23.9226C124.953 23.3968 125.692 22.7081 126.277 21.8962C126.862 21.0842 127.281 20.1648 127.51 19.1907Z" fill="#C7FFFD" />
                    <path d="M154.08 41.2358L159.991 16.1521L106.831 3.62409L99.3089 35.6067L97.7065 42.3995L130.169 50.0465L150.866 54.9228L154.08 41.2358ZM164.309 14.3327L153.738 59.185L93.7676 45.0362L104.333 0.188477L164.309 14.3327Z" fill="#F6FAFD" />
                    <path d="M154.081 41.2363L150.849 54.9234L130.156 50.047L130.295 49.4606C128.822 46.5098 127.252 43.596 125.566 40.7561L125.802 40.6129L131.662 36.9187C134.433 35.1732 137.245 33.4092 140.413 32.6519C143.58 31.8946 147.238 32.3379 149.597 34.5821C150.506 35.5101 151.283 36.559 151.906 37.6991C152.631 38.8674 153.338 40.0496 154.081 41.2363Z" fill="#56D8CF" />
                    <path d="M130.295 49.4595L130.156 50.0459L97.6934 42.3989L99.3096 35.6062C102.473 33.007 106.068 30.9829 109.93 29.6262C111.81 28.9566 113.851 28.4533 115.763 28.9751C118.316 29.677 120.029 31.9766 121.489 34.1839C122.948 36.3912 124.292 38.5292 125.589 40.755C127.252 43.5949 128.822 46.5087 130.295 49.4595Z" fill="#38B2AC" />
                    <path d="M121.839 10.0243C123.308 10.3642 124.643 11.1321 125.675 12.2308C126.707 13.3296 127.39 14.7098 127.637 16.1968C127.885 17.6838 127.685 19.2108 127.065 20.5845C126.444 21.9583 125.43 23.117 124.15 23.9142C122.871 24.7113 121.384 25.111 119.877 25.0627C118.37 25.0144 116.912 24.5203 115.686 23.6428C114.46 22.7654 113.523 21.544 112.991 20.1334C112.46 18.7227 112.359 17.1861 112.701 15.718C112.927 14.7438 113.342 13.8238 113.924 13.0103C114.505 12.1969 115.241 11.506 116.09 10.9772C116.939 10.4485 117.883 10.0921 118.87 9.92861C119.856 9.76509 120.865 9.79759 121.839 10.0243Z" fill="#FFC533" />
                    <path d="M149.204 26.2185C148.524 27.8563 147.844 29.4941 147.163 31.1318C144.764 31.4519 142.334 31.4814 139.927 31.2196C139.316 31.2016 138.721 31.0232 138.2 30.7024C137.277 30.019 137.194 28.689 137.277 27.5438C137.341 26.3294 137.526 25.0041 138.422 24.1821C138.546 24.0533 138.708 23.9662 138.884 23.9327C139.043 23.9217 139.202 23.9519 139.346 24.0205C140.916 24.6393 142.301 25.9738 143.963 25.8907C143.76 25.0918 143.557 24.2883 143.358 23.4894C143.328 23.4235 143.313 23.3518 143.313 23.2793C143.313 23.2069 143.328 23.1352 143.358 23.0692C143.483 22.8891 143.765 22.9445 143.968 23.0323C145.843 23.8589 147.233 25.6829 149.204 26.2185Z" fill="#F7B05C" />
                  </svg>
                  <p className="text-sm text-[#1D3A76] py-2 font-bold font-sans">+ Add Photos</p>
                  <p className="text-[11px] text-gray-500 text-center px-3">
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
                className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center py-5 h-[180px]">
                  {/*  */}
                  <svg width="220" height="130" viewBox="0 0 270 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M269.705 143.446C269.705 143.446 238.946 153.79 129.122 153.79C19.2976 153.79 0 143.788 0 143.788L269.705 143.446Z" fill="#E8E8E8" />
                    <path d="M57.841 143.63H200.53C200.53 143.63 219.754 88.0968 174.43 91.2738C174.43 91.2738 170.639 53.1772 131.397 53.1772C92.1556 53.1772 86.6051 94.6263 86.6051 94.6263C86.6051 94.6263 39.5177 81.2209 57.841 143.63Z" fill="#FFFEFD" />
                    <path d="M160.965 84.514L156.979 87.1831C156.383 86.352 155.725 85.5663 155.012 84.8326C154.145 83.9166 153.219 83.0575 152.242 82.2605L152.075 82.122C147.955 78.7893 143.051 76.5641 137.83 75.6571H137.673C135.851 75.3508 134.006 75.1963 132.159 75.1954H131.933C130.723 75.1954 129.567 75.2354 128.465 75.3154C126.844 75.4215 125.232 75.622 123.635 75.9157C123.196 75.9942 122.762 76.082 122.342 76.1789C121.63 76.3313 120.956 76.5068 120.277 76.6915C118.793 77.1073 117.34 77.6258 115.927 78.2431C114.8 78.7354 113.705 79.2984 112.649 79.9286L112.187 80.2056C111.328 80.7448 110.498 81.3306 109.703 81.9604C109.034 82.4954 108.394 83.0657 107.786 83.669C107.662 83.789 107.542 83.9091 107.431 84.0291C106.538 84.9201 105.762 85.9209 105.122 87.0076L100.883 84.7634C101.766 83.2371 102.853 81.8388 104.115 80.6074C104.66 80.0486 105.279 79.4576 105.985 78.8572C106.964 78.0208 107.996 77.2495 109.075 76.5484C109.536 76.2436 109.998 75.9434 110.525 75.6248C111.051 75.3062 111.624 75.0014 112.21 74.7013C114.721 73.4299 117.368 72.4507 120.102 71.7828C120.305 71.732 120.513 71.6812 120.73 71.6351C121.261 71.5104 121.806 71.3903 122.36 71.2841C123.887 70.9884 125.428 70.7711 126.978 70.633C127.8 70.5545 128.659 70.4991 129.531 70.4622L130.247 70.4345C130.811 70.4345 131.383 70.4067 131.979 70.4067H132.598C133.304 70.4067 133.983 70.4483 134.662 70.4945C135.124 70.5268 135.585 70.5637 136.047 70.6099H136.301C142.651 71.2831 148.707 73.6339 153.849 77.4211C154.472 77.8829 155.058 78.3447 155.599 78.8065C156.569 79.6123 157.494 80.471 158.369 81.3786C159.317 82.3527 160.185 83.4012 160.965 84.514Z" fill="#272742" />
                    <path d="M62.1049 136.962C61.3106 134.429 60.8814 131.797 60.8304 129.144C60.8304 128.838 60.7087 128.544 60.4922 128.327C60.2757 128.111 59.9821 127.989 59.6759 127.989C59.3697 127.989 59.0761 128.111 58.8596 128.327C58.6431 128.544 58.5215 128.838 58.5215 129.144C58.5709 131.995 59.0265 134.825 59.8745 137.548C59.9541 137.844 60.1479 138.096 60.4134 138.249C60.6788 138.402 60.9941 138.443 61.2898 138.363C61.5856 138.283 61.8376 138.09 61.9905 137.824C62.1433 137.559 62.1845 137.243 62.1049 136.948V136.962Z" fill="#E4F4F4" />
                    <path d="M137.692 105.995H134.492V117.484C134.492 118.245 134.19 118.974 133.652 119.512C133.115 120.05 132.385 120.352 131.625 120.352H129.251C128.491 120.352 127.761 120.05 127.223 119.512C126.686 118.974 126.384 118.245 126.384 117.484V105.995H123.183C122.898 105.994 122.618 105.916 122.372 105.769C122.127 105.623 121.925 105.413 121.789 105.162C121.652 104.911 121.585 104.628 121.595 104.343C121.604 104.057 121.691 103.779 121.844 103.538L129.099 92.2619C129.243 92.0379 129.441 91.8537 129.675 91.7261C129.909 91.5986 130.171 91.5317 130.438 91.5317C130.704 91.5317 130.967 91.5986 131.201 91.7261C131.435 91.8537 131.633 92.0379 131.777 92.2619L139.022 103.538C139.177 103.778 139.265 104.056 139.276 104.341C139.286 104.626 139.221 104.909 139.085 105.16C138.949 105.412 138.748 105.622 138.503 105.768C138.258 105.915 137.978 105.994 137.692 105.995Z" fill="#46C1B5" />
                    <path d="M160.573 129.985H100.598V116.515C100.598 116.014 100.797 115.533 101.151 115.179C101.505 114.825 101.985 114.626 102.486 114.626H104.246C104.747 114.626 105.228 114.825 105.583 115.179C105.938 115.533 106.138 116.013 106.139 116.515V124.443H155.032V116.515C155.033 116.013 155.233 115.533 155.588 115.179C155.943 114.825 156.424 114.626 156.925 114.626H158.685C159.185 114.626 159.666 114.825 160.02 115.179C160.374 115.533 160.573 116.014 160.573 116.515V129.985Z" fill="#46C1B5" />
                    <path d="M137.691 106.965H134.491V118.454C134.491 119.215 134.189 119.944 133.651 120.482C133.114 121.02 132.384 121.322 131.624 121.322H129.25C128.49 121.322 127.76 121.02 127.222 120.482C126.685 119.944 126.382 119.215 126.382 118.454V106.965H123.182C122.897 106.965 122.616 106.888 122.371 106.742C122.125 106.596 121.924 106.387 121.787 106.136C121.65 105.885 121.583 105.602 121.593 105.317C121.603 105.031 121.689 104.754 121.843 104.513L129.098 93.2321C129.242 93.0081 129.44 92.8239 129.674 92.6964C129.908 92.5688 130.17 92.502 130.437 92.502C130.703 92.502 130.965 92.5688 131.199 92.6964C131.433 92.8239 131.632 93.0081 131.776 93.2321L139.021 104.513C139.175 104.753 139.261 105.03 139.272 105.315C139.282 105.599 139.216 105.881 139.08 106.132C138.944 106.382 138.744 106.592 138.499 106.738C138.255 106.885 137.976 106.963 137.691 106.965Z" fill="#56D8CF" />
                    <path d="M160.573 130.954H100.598V117.489C100.597 117.24 100.645 116.994 100.74 116.764C100.835 116.535 100.974 116.326 101.149 116.15C101.325 115.974 101.533 115.835 101.762 115.739C101.992 115.644 102.238 115.595 102.486 115.595H104.246C104.748 115.595 105.229 115.795 105.584 116.15C105.94 116.505 106.139 116.986 106.139 117.489V125.413H155.032V117.489C155.032 116.986 155.231 116.505 155.586 116.15C155.941 115.795 156.423 115.595 156.925 115.595H158.685C158.933 115.595 159.179 115.644 159.408 115.739C159.638 115.835 159.846 115.974 160.022 116.15C160.197 116.326 160.336 116.535 160.431 116.764C160.525 116.994 160.574 117.24 160.573 117.489V130.954Z" fill="#56D8CF" />
                    <path d="M124.514 20.1465L101.91 43.9926C105.95 43.3379 110.072 43.3957 114.092 44.1635C116.05 44.5329 118.068 45.124 119.458 46.5416C121.305 48.4303 121.633 51.2795 121.767 53.9301C121.877 55.8295 121.95 57.7274 121.984 59.6238C121.984 60.3072 121.984 61.0091 121.984 61.674H122.261C124.57 61.5955 126.878 61.5032 129.187 61.4201C132.461 61.3046 135.781 61.1938 138.885 62.1358C141.291 62.8141 143.396 64.2891 144.855 66.3195C147.306 67.4186 149.605 68.8295 151.694 70.5171L151.861 70.6556L155.162 67.1738L164.148 57.7397L124.514 20.1465ZM123.498 33.538C124.534 32.4437 125.871 31.6812 127.34 31.347C128.809 31.0128 130.344 31.1219 131.751 31.6606C133.158 32.1992 134.374 33.1432 135.244 34.373C136.115 35.6028 136.601 37.0632 136.641 38.5693C136.681 40.0755 136.273 41.5596 135.47 42.834C134.666 44.1084 133.502 45.1157 132.126 45.7285C130.749 46.3412 129.222 46.5319 127.737 46.2763C126.252 46.0208 124.877 45.3305 123.785 44.2928C122.319 42.9033 121.466 40.9886 121.412 38.9701C121.359 36.9515 122.109 34.9942 123.498 33.5288V33.538Z" fill="#FFC533" />
                    <path d="M126.42 18.1379L124.075 15.9121L92.3828 49.3493L108.73 64.8512L112.332 68.2683C113.388 67.6381 114.483 67.0752 115.61 66.5828L111.865 63.0318L97.1206 49.0538L101.923 43.9743L124.527 20.1281L164.147 57.7398L155.212 67.1693L151.91 70.6511C152.888 71.448 153.814 72.3072 154.681 73.2232L157.983 69.7414L168.802 58.3309L126.42 18.1379Z" fill="#F6FAFD" />
                    <path d="M144.906 66.3007C142.545 65.2462 140.064 64.4863 137.517 64.038H137.36C135.538 63.7317 133.694 63.5772 131.847 63.5762H131.62C130.411 63.5762 129.255 63.6163 128.152 63.6963C126.532 63.8024 124.919 64.0029 123.322 64.2966C122.884 64.3751 122.45 64.4629 122.029 64.5598C122.029 63.6086 122.029 62.6573 122.029 61.706H122.306C124.615 61.6275 126.924 61.5352 129.233 61.4521C132.507 61.3366 135.827 61.2258 138.93 62.1678C141.331 62.8319 143.437 64.2884 144.906 66.3007Z" fill="#56D8CF" />
                    <path d="M122.019 61.6646C122.019 62.6158 122.019 63.5671 122.019 64.5183C121.308 64.6707 120.634 64.8462 119.955 65.0309C118.471 65.4467 117.017 65.9652 115.605 66.5825L111.86 63.0314L97.1152 49.0534L101.918 43.9739C105.957 43.3192 110.08 43.377 114.099 44.1448C116.057 44.5142 118.075 45.1053 119.465 46.5229C121.312 48.4116 121.64 51.2607 121.774 53.9113C121.885 55.8108 121.957 57.7087 121.991 59.605C122.014 60.2977 122.019 60.9719 122.019 61.6646Z" fill="#38B2AC" />
                    <path d="M134.266 33.2283C135.361 34.2636 136.124 35.6005 136.46 37.0698C136.795 38.5392 136.687 40.0749 136.15 41.4829C135.612 42.8909 134.669 44.1078 133.44 44.9798C132.21 45.8518 130.75 46.3396 129.244 46.3816C127.737 46.4236 126.252 46.0178 124.976 45.2157C123.7 44.4136 122.691 43.251 122.076 41.8752C121.461 40.4993 121.267 38.972 121.52 37.4862C121.773 36.0005 122.461 34.6232 123.497 33.5285C124.184 32.8008 125.007 32.2157 125.921 31.8068C126.834 31.3978 127.819 31.1729 128.819 31.145C129.819 31.1172 130.815 31.2868 131.75 31.6443C132.684 32.0018 133.539 32.54 134.266 33.2283Z" fill="#FF5331" />
                    <path d="M159.992 16.1522L154.081 41.2359C153.347 40.0491 152.631 38.867 151.897 37.6848C151.274 36.5447 150.497 35.4958 149.588 34.5678C147.228 32.3236 143.585 31.8849 140.403 32.6376C137.222 33.3903 134.4 35.1589 131.652 36.9044L125.793 40.5986L125.557 40.7418C124.259 38.516 122.883 36.3272 121.456 34.1707C120.03 32.0142 118.284 29.6638 115.73 28.9619C113.819 28.4401 111.778 28.9619 109.898 29.613C106.035 30.9697 102.441 32.9938 99.2773 35.593L106.814 3.61035L159.992 16.1522ZM127.51 19.1907C127.856 17.7252 127.76 16.19 127.233 14.7794C126.706 13.3687 125.773 12.1458 124.552 11.2653C123.33 10.3848 121.875 9.88619 120.371 9.83252C118.866 9.77885 117.379 10.1725 116.098 10.9638C114.817 11.755 113.799 12.9083 113.173 14.2779C112.547 15.6475 112.342 17.1718 112.582 18.6582C112.823 20.1447 113.498 21.5265 114.524 22.6289C115.549 23.7314 116.879 24.505 118.344 24.8521C119.318 25.0833 120.327 25.1202 121.315 24.9607C122.303 24.8013 123.25 24.4485 124.101 23.9226C124.953 23.3968 125.692 22.7081 126.277 21.8962C126.862 21.0842 127.281 20.1648 127.51 19.1907Z" fill="#C7FFFD" />
                    <path d="M154.08 41.2358L159.991 16.1521L106.831 3.62409L99.3089 35.6067L97.7065 42.3995L130.169 50.0465L150.866 54.9228L154.08 41.2358ZM164.309 14.3327L153.738 59.185L93.7676 45.0362L104.333 0.188477L164.309 14.3327Z" fill="#F6FAFD" />
                    <path d="M154.081 41.2363L150.849 54.9234L130.156 50.047L130.295 49.4606C128.822 46.5098 127.252 43.596 125.566 40.7561L125.802 40.6129L131.662 36.9187C134.433 35.1732 137.245 33.4092 140.413 32.6519C143.58 31.8946 147.238 32.3379 149.597 34.5821C150.506 35.5101 151.283 36.559 151.906 37.6991C152.631 38.8674 153.338 40.0496 154.081 41.2363Z" fill="#56D8CF" />
                    <path d="M130.295 49.4595L130.156 50.0459L97.6934 42.3989L99.3096 35.6062C102.473 33.007 106.068 30.9829 109.93 29.6262C111.81 28.9566 113.851 28.4533 115.763 28.9751C118.316 29.677 120.029 31.9766 121.489 34.1839C122.948 36.3912 124.292 38.5292 125.589 40.755C127.252 43.5949 128.822 46.5087 130.295 49.4595Z" fill="#38B2AC" />
                    <path d="M121.839 10.0243C123.308 10.3642 124.643 11.1321 125.675 12.2308C126.707 13.3296 127.39 14.7098 127.637 16.1968C127.885 17.6838 127.685 19.2108 127.065 20.5845C126.444 21.9583 125.43 23.117 124.15 23.9142C122.871 24.7113 121.384 25.111 119.877 25.0627C118.37 25.0144 116.912 24.5203 115.686 23.6428C114.46 22.7654 113.523 21.544 112.991 20.1334C112.46 18.7227 112.359 17.1861 112.701 15.718C112.927 14.7438 113.342 13.8238 113.924 13.0103C114.505 12.1969 115.241 11.506 116.09 10.9772C116.939 10.4485 117.883 10.0921 118.87 9.92861C119.856 9.76509 120.865 9.79759 121.839 10.0243Z" fill="#FFC533" />
                    <path d="M149.204 26.2185C148.524 27.8563 147.844 29.4941 147.163 31.1318C144.764 31.4519 142.334 31.4814 139.927 31.2196C139.316 31.2016 138.721 31.0232 138.2 30.7024C137.277 30.019 137.194 28.689 137.277 27.5438C137.341 26.3294 137.526 25.0041 138.422 24.1821C138.546 24.0533 138.708 23.9662 138.884 23.9327C139.043 23.9217 139.202 23.9519 139.346 24.0205C140.916 24.6393 142.301 25.9738 143.963 25.8907C143.76 25.0918 143.557 24.2883 143.358 23.4894C143.328 23.4235 143.313 23.3518 143.313 23.2793C143.313 23.2069 143.328 23.1352 143.358 23.0692C143.483 22.8891 143.765 22.9445 143.968 23.0323C145.843 23.8589 147.233 25.6829 149.204 26.2185Z" fill="#F7B05C" />
                  </svg>
                  <p className="text-sm text-[#1D3A76] py-2 font-bold font-sans">+ Add Videos</p>
                  <p className="text-[11px] text-gray-500 text-center px-3">
                    Upload Videos of max size of 30MB in format MP4
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
                      className="w-full h-32 object-cover rounded"
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
                      src={preview.url}
                      className="w-full h-32 object-cover rounded"
                      controls
                    />
                    <Select
                      value={videoFiles[index].videotype}
                      data={[
                        { value: 'video', label: 'Video' },
                        { value: 'short', label: 'Short' }
                      ]}
                      onChange={(value) => handleVideoTypeChange(index, value)}
                      className="!m-0 !p-0"
                      dropdownClassName="z-50"
                    />
                    <div
                      className="absolute top-2 right-2 bg-[#1D3A76] text-white rounded-full p-1 text-xs cursor-pointer"
                      onClick={() => removeVideoPreview(index, preview.video_id)}
                    >
                      <IconX size={12} />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-end items-center  px-6 py-3'>
          {/* <div onClick={() => updateActiveTab('address', 'completed', unique_property_id)} className='bg-[#000] px-8 py-2 rounded-md cursor-pointer'>
            <p className='text-white text-[10px]'>Back</p>
          </div> */}
          {
            (previews.length > 0 || videoPreviews.length > 0) ?
              <div onClick={handleSubmitPhotosVideos} className='border border-[#1D3A76] bg-[#1D3A76] px-8 py-2 rounded-md cursor-pointer'>
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

