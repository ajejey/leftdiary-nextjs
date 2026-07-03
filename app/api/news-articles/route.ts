import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    articles: [],
    totalPages: 0,
    currentPage: 1,
    totalArticles: 0
  });
}
