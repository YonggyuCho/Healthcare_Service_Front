import axios from 'axios';

// API 기본 URL 
const API_BASE_URL = 'http://www.bangwol08.com';

// 공통 axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
