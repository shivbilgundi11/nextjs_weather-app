import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const lat = 12.97;
    const lon = 77.6;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const data = await axios.get(url);
    return NextResponse.json(data.data);
  } catch (error) {
    console.log('Error fetching forecast data');
    return new Response('Error fetching forecast data', { status: 500 });
  }
}
