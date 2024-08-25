import { NextResponse } from 'next/server';

import prisma from '@/prisma/client';

export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany({
      include: { hours: true },
    });
    return NextResponse.json({ restaurants }, { status: 200 });
  } catch (error) {
    throw NextResponse.json({ error: (error as Error)?.message }, { status: 500 });
  }
}

// hour도 설정

export async function POST(request: Request) {
  const { category, name, address, snsUrl } = await request.json();

  try {
    if (!category || !name || !address) {
      throw new Error('Category, name, and address are required.');
    }
    const newRestaurant = await prisma.restaurant.create({
      data: {
        category,
        name,
        address,
        snsUrl: snsUrl || null,
      },
    });
    return NextResponse.json({ newRestaurant }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error)?.message }, { status: 500 });
  }
}
