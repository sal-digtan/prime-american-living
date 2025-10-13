import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const url = new URL(req.url);
    const q = url.searchParams.get('q');
    const format = url.searchParams.get('format');
    const limit = url.searchParams.get('limit');

    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q,
                format,
                limit,
            },
            headers: {
                'User-Agent': 'prime-american-living',
            },
        });
        return NextResponse.json(response.data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}