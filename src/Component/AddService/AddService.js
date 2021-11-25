import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://mysterious-island-14238.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
            }
        })
    }
    return (
        <div className='container add-service'>
            <h3>Add New Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Type Your Name" required/>
                <textarea {...register("description")} placeholder="Description" required/>
                <input type="number" {...register("price")} placeholder="Price" required/>
                <input {...register("image")} placeholder="Image Url" required/>
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
