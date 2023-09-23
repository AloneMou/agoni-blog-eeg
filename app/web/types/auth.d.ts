
type LoginParams = {
  username?: string;
  password?: string;
};

type AuthToken = {
  userId?: number,
  accessToken?: string,
  refreshToken?: string,
  expiresTime?: string
}

type CurrentUser = {
  username: string,
  nickname: string,
  avatar: string,
  access?: string,
}

