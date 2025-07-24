"use server";

// this action will be added to the JS bundle after build and it is more secure than version 14 as the server action ID will not be deterministically generated and will be generated randomly and you have the option to set your own encruption key and thereby protect your application from hacking
export async function updateUserAction(formData) {
    const name = formData.get("name");
    console.log(name);
}

// this action will not be added to the JS bundle after build as it was unused
export async function deleteUserAction(formData) {
    console.log("User deleted");
}
