export const PATH_URL_API = 'https://hospital2021.000webhostapp.com';
const URL_API = {
  LOGIN: PATH_URL_API + '/v1/auth/login',
  DASHBOARD: PATH_URL_API + '/v1/karyawan',
  ABSENSI_GET: PATH_URL_API + '/v1/karyawan/absensi',
  ABSENSI_POST_TAKE: PATH_URL_API + '/v1/karyawan/absensi',
  HISTORY_ABSENSI_GET: PATH_URL_API + '/v1/karyawan/absensi/history',
  LEAVE: PATH_URL_API + '/v1/karyawan/cuti',
  LEAVE_GET: PATH_URL_API + '/v1/karyawan/cuti',
  LEAVE_CREATE: PATH_URL_API + '/v1/karyawan/cuti/create',
  LEAVE_UPLOAD_FILE: PATH_URL_API + '/v1/karyawan/cuti/upload_document',
  PRESTASI_GET: PATH_URL_API + '/v1/karyawan/prestasi',
  PROFILE_GET: PATH_URL_API + '/v1/karyawan/profile',
  PROFILE_CHANGE_POST: PATH_URL_API + '/v1/karyawan/change_profile',
  PROFILE_PASSWORD_CHANGE_POST: PATH_URL_API + '/v1/karyawan/change_password',
};
export default URL_API 