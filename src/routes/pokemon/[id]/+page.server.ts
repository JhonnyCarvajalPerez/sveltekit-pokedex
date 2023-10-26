import { redirect } from '@sveltejs/kit';

export function load() {

	console.log('fake middleware of pokemon/id');

    return {
        data:'My custom data'
    } 
    
    //redirect page
    //throw redirect(307, '/b');
}