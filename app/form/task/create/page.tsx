'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Navbar from "@/components/navbar";


export default function Page() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "", // Store date in string format (for simplicity, handle in form)
    class: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data Submitted: ", formData);  // Log to see the data before submitting

    // Check if due_date exists before sending the form data
    if (!formData.due_date) {
      toast.error("Please select a due date.");
      return;
    }

    await axios.post('/api/assignments', formData, {
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then(() => {
        setFormData({
          title: "",
          description: "",
          due_date: "",
          class: "",
        })
        toast.success("Form submitted successfully!");
      })
      .catch(() => toast.error("An error occurred. Please try again."));
  };

  return (
    <>
      <Navbar />
      <Card className="mx-auto max-w-2xl mt-8 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Create Task</CardTitle>
          <CardDescription>
            Fill in the required details to create a new task
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">

            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Math Tasks"
                required
                value={formData.title}
                onChange={handleChange}
              />
            </div>



            <div className="grid gap-2">
              <Label htmlFor="due_date">Due Date</Label>
              <Input
              className="w-[170px]"
                id="due_date"
                type="datetime-local"
                placeholder="Math Tasks"
                required
                value={formData.due_date}
                onChange={handleChange}
              />
            </div>


            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Write a brief description about your task"
                required
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
}
