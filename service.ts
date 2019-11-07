import request from '@/utils/request';

interface DemoGetType {
  id: number;
}

export function demoGet(params: DemoGetType) {
  return request('/api/demo', { params });
}
export function demoPost(params: DemoGetType) {
  return request('/api/demo', {
    method: 'POST',
    data: params,
  });
}
