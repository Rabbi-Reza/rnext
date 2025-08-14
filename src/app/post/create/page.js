import Form from "next/form";
import createPost from "../../../actions/createPost";

export default async function CreatePostPage() {
    return (
        <div className="w-full flex flex-col gap-8 p-2">
            <h1 className="text-2xl font-bold text-center">Create a Post</h1>

            <Form action={createPost} className="flex flex-col gap-2">
                <input
                    type="text"
                    name="title"
                    className="outline-none p-2 rounded shadow"
                />
                <button
                    type="submit"
                    className="bg-blue-500 px-2 py-1 rounded shadow text-white"
                >
                    Submit
                </button>
            </Form>
        </div>
    );
}
