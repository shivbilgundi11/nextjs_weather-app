import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const lat = 12.97;
    const lon = 77.6;

    const dailyURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const dailyResponse = await fetch(dailyURL, {
      next: { revalidate: 3600 },
    });

    const dailyData = await dailyResponse.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.log('Error fetching forecast data');
    return new Response('Error fetching pollution data', { status: 500 });
  }
}
