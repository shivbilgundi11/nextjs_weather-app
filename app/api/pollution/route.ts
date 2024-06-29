import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const lat = 12.97;
    const lon = 77.6;

    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await axios.get(url);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log('Error fetching forecast data');
    return new Response('Error fetching pollution data', { status: 500 });
  }
}
