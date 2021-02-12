export const getAuthConfig = (token) => {
    return {
      headers: { Authorization: `bearer ${token}` },
    };
  };