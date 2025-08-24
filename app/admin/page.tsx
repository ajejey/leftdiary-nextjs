import RunNewsAgent from '@/components/admin/RunNewsAgent'
import React from 'react'

const page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_NEWS_AGENT_API_URL || 'http://localhost:5000';
  
  return (
    <RunNewsAgent apiUrl={`${apiUrl}/api`} />
  )
}

export default page

