const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`User ${errorData.message}`);
  }
  return response.json();
};

export const fetchUser = async (user) => fetchData(`https://api.github.com/user/${user}`);

export const fetchUserRepos = async (url) => fetchData(url);
