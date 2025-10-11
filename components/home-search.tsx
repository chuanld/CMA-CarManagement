'use client'
import React, { use, useCallback, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Camera, Loader2, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import useFetch from '@/app/hooks/use-fetch';
import { processImageSearch } from '@/actions/home';
import { ApiResponse } from '@/types/api';


const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isImageSearchActive, setIsImageSearchActive] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [searchImage, setSearchImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB limit.");
        return;
      }
      setIsUploading(true);
      setSearchImage(file)

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setIsUploading(false);
        toast.success("Image uploaded successfully!");
      };
      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Failed to read file.");
      }
      reader.readAsDataURL(file);
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: { 'image/*': [".jpeg", ".png", ".jpg"] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024 // 5MB
  })

  const router = useRouter()

  const { loading: isProcessing, fetchData: fnSearchImageAI, data: resultSearchAI, error: errorSearchImageAI } = useFetch<ApiResponse<any>>(processImageSearch)

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!searchTerm.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    router.push(`/cars?search=${encodeURIComponent(searchTerm)}`);
  }

  const handleImageSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchImage) {
      toast.error("Please upload an image first.");
      return;
    }

    await fnSearchImageAI(searchImage);
  }
  useEffect(() => {
    if (resultSearchAI?.success && resultSearchAI.data) {
      // Handle successful image search result
      const params = new URLSearchParams();

      if (resultSearchAI.data.make) {
        params.set('make', resultSearchAI.data.make);
      }
      if (resultSearchAI.data.bodyType) {
        params.set('bodyType', resultSearchAI.data.bodyType);
      }
      if (resultSearchAI.data.color) {
        params.set('color', resultSearchAI.data.color);
      }
      router.push(`/cars?${params.toString()}`);
    }
  }, [resultSearchAI]);

  useEffect(() => {
    if (errorSearchImageAI) {
      toast.error(errorSearchImageAI?.message || "Error processing image search.");
    }
  }, [errorSearchImageAI])
  return (
    <div className='flex flex-wrap gap-2 w-full'>
      <div className='flex items-left justify-center gap-4 w-full'>
        <form onSubmit={handleTextSubmit} className='text-left flex flex-nowrap justify-between items-center max-w-3xl mx-auto gap-2 '>
          <div className='  w-full flex items-center border-none border-b-8 border-white text-2xl text-white '>
            <Input type='text' placeholder='Search for cars, brands, models...' className=' relative w-full pr-10 py-5 outline-none border-none focus:border-blue-500 text-white font-medium'
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm} />
          </div>

          <div className='relative right-0 flex items-center justify-around m-auto rounded-full  cursor-pointer gap-2'>
            <div>
              <Camera className={`m-auto text-gray-400 cursor-pointer rounded-full transform  ${isImageSearchActive ? 'bg-gray-500' : ''}`} size={25}
                onClick={() => setIsImageSearchActive(!isImageSearchActive)} />
            </div>

            {
              imagePreview && (
                <div className='absolute -top-10 -right-10 w-16 h-16'>
                  <img src={imagePreview} alt="Car Preview" className='w-full h-full object-cover rounded-full border-2 border-white' />
                </div>
              )
            }
            <Button type='submit' className=' rounded-full w-full cursor-pointer'
              disabled={isUploading}>
              {isUploading ? 'Uploading...' : 'Search'}
            </Button>
          </div>

        </form>


      </div>
      <div>
        {isImageSearchActive && (
          <div className={`mt-4 flex flex-col items-center text-white border-2 border-dashed ${imagePreview ? 'border-none' : 'border-gray-300'} p-6 rounded-lg`}>
            <form onSubmit={handleImageSearch} className='flex items-center'>
              <div>
                {imagePreview ? (
                  <div className='flex flex-col items-center w-fit h-full'>
                    <img src={imagePreview} alt="Car Preview" className='h-60 object-contain mb-8' />
                    
                      <div className=' flex gap-2 items-center justify-center w-full'>
                        <Button type='submit' className=' rounded-full cursor-pointer' disabled={isProcessing || isUploading}>
                          {isProcessing && <Loader2 className='animate-spin mr-2' size={16} />}
                          {isProcessing ? 'Searching...' : 'Search by Image'}
                        </Button>
                        <Button className='bg-gray-500' variant='ghost' onClick={() => { setSearchImage(null); setImagePreview(null); toast.info("Image removed successfully!"); }}>Remove Image</Button>

                      </div>

                  </div>
                ) : (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Upload className='m-auto text-gray-400 cursor-pointer' size={25} />
                    {isDragActive && !isDragReject ? (
                      <p>Drop the file here ...</p>
                    ) : (
                      <p>Drag n drop some file here or click to select files</p>
                    )}

                    {isDragReject && <p>File type not accepted, sorry!</p>}
                  </div>
                )}

              </div>

            </form>

          </div>
        )}
      </div>

    </div>

  )
}

export default HomeSearch