import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdCloudUpload } from "react-icons/md";
import Display from "../component/Display";
import { uploadFile, createBlog } from '../api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateBlog = () => {
    const [images, setImages] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        post: "<p><br></p>",
        category: ''
    });

    const menu = [
        { text: 'Nature', path: '/' },
        { text: 'Travel', path: '/' },
        { text: 'Technology', path: '/' },
        { text: 'Politics', path: '/' },
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpload = async (event) => {
        try {
            const uploadedFile = await uploadFile(event.target.files[0]);
            if (uploadedFile.path) {
                setFormData({ ...formData, image: uploadedFile.path });
                setImages([...images, uploadedFile.path]);
                toast.success('Image uploaded successfully!');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            toast.error('Failed to upload image.');
        }
    };

    const handelSubmit = async () => {
        try {
            const response = await createBlog(formData);
    
            if (response.status === 200) { // Assuming status 200 means success
                setFormData({
                    title: '',
                    image: '',
                    post: '<p><br></p>',
                    category: ''
                });
                // setImages([]);
                toast.success('Blog post created successfully!');
            } else {
                toast.error(`Failed to create blog post: ${response.message}`);
            }
        } catch (error) {
            console.error('Error creating blog post:', error);
            toast.error('An error occurred while creating the blog post.');
        }
    };
    

    return (
        <div className='flex w-full items-center justify-center'>
            <div className="bg-[#DBB5B5]/30 w-[60%] p-5 rounded-xl">
         
                <h1 className='text-2xl mb-5'>Create Blog Post</h1>
                
                <div className="flex flex-col">
                    <label htmlFor="title" className='ml-1 text-gray-500'>Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        className='h-10 border border-gray-300 rounded my-2 p-2'
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <label htmlFor="category" className='ml-1 text-gray-500'>Category</label>
                    <select 
                        id="category" 
                        name="category"
                        className='h-10 border border-gray-300 rounded my-2 p-2'
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select Category</option>
                        {menu.map(x => <option key={x.text} value={x.text}>{x.text}</option>)}
                    </select>
                    <div className="mt-2">
                        <label htmlFor="image" className='ml-1 text-gray-500'>Image</label>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
                            {images.length > 0 && images.map((image, index) => (
                                <Display key={index} image={image} />
                            ))}

                            {images.length < 8 && (
                                <label className="border rounded-2xl cursor-pointer h-24 w-32 p-4 border-gray-400  text-gray-600">
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        multiple
                                        onChange={handleUpload}
                                        name="image"
                                    />
                                    <MdCloudUpload className="text-lg text-black" />
                                    <p className="text-sm">Upload</p>
                                </label>
                            )}
                        </div>
                    </div>

                    <label htmlFor="post" className='ml-1 text-gray-500'>Post</label>
                    <ReactQuill 
                        className='bg-white rounded mb-2 mt-2 editingarea' 
                        theme="snow" 
                        value={formData.post}
                        onChange={(value) => setFormData({ ...formData, post: value })}
                    />
                    <hr />
                    <button 
                        className='bg-[#1e5b77] text-white h-8 w-[100px] mt-2 rounded'
                        onClick={handelSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CreateBlog;
