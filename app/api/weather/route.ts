import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const searchParams = req.nextUrl.searchParams;

    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
    let unit = searchParams.get('unit');

    if (!unit || (unit !== 'metric' && unit !== 'imperial')) {
      unit = 'metric'; // or 'imperial' based on your default or preference
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

    const res = await axios.get(url);

    return NextResponse.json(res.data);
  } catch (error) {
    console.log('Error fetching forecast data');
    return new Response('Error fetching forecast data', { status: 500 });
  }
}
