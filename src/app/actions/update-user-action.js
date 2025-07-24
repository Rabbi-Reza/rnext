"use server";

export async function updateUserAction(formData) {
    const name = formData.get("name");
    console.log(name);
}

export async function deleteUserAction(formData) {
    console.log("User deleted");
}
