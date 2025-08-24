import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEWS_AGENT_API_URL || 'http://localhost:5000/api';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const status = searchParams.get('status') || 'published';
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const keyword = searchParams.get('keyword');
    const sort = searchParams.get('sort') || 'publishedAt';
    const order = searchParams.get('order') || 'desc';

    // Build query string
    const queryParams = new URLSearchParams({
      page,
      limit,
      status,
      sort,
      order
    });

    if (category) queryParams.append('category', category);
    if (tag) queryParams.append('tag', tag);
    if (keyword) queryParams.append('keyword', keyword);

    // Fetch articles from the news agent API
    const response = await fetch(`${API_URL}/articles?${queryParams.toString()}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 60 } // Revalidate every minute
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news articles' },
      { status: 500 }
    );
  }
}

