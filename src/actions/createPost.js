"use server";

import { redirect } from "next/navigation";

export default async function createPost(formData) {
    const title = formData.get("title");

    console.log(`The post title is ${title}`);

    // we can do whatever inside the server to create the post

    // redirect
    redirect("/result");
}
