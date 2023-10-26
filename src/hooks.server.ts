import { error as svelteError } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {

    console.log('Hook middleware...')

    if (event.url.pathname.startsWith('/api')) {
        const jtoken = event.request.headers.get('jtoken')
        if (jtoken === 'jhonny1') {
            const response = await resolve(event);
            return response;
        }
        throw svelteError(401,{message:'Unauthorized', code:401});
    }

    if (event.url.pathname.startsWith('/pokemon')) {
        const jtoken = event.request.headers.get('jtoken');

        if (true) {
            return await resolve(event,{
                transformPageChunk: ({ html }) => html.replace(
                    '<body',
                    '<body style="color: hotpink"'
                )
            });
            
        }
        throw svelteError(401,{message:'Unauthorized', code:401});
    }

    const response = await resolve(event);
    return response;
}

/* export function handleFetch({ event, request, fetch }) {
	
} */

export function handleError({ event, error }:any) {

    console.error(error.stack);
	throw svelteError(404,{message:'Page not found', code:404});
}