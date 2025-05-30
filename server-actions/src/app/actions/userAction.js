'use server'

import { redirect } from "next/navigation"

export async function createUser(data) {
    console.log('Server actions', data)
    //Read data from the FormData Object
    console.log('Name', data.get('name'))
    console.log('email', data.get('email'))
    //db operation here it can go ;  you can use prisma over here
    //return { success: true, message: 'Data Saved successfully' }
    //redirect to some success page
    //  redirect('/success')
    redirect(`/success?name=${encodeURIComponent(data.get("name"))}&email=${encodeURIComponent(data.get("email"))}`);
}