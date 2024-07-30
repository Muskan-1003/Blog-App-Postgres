import axios from 'axios';

const apiURL = 'http://localhost:8080';

// Get all blogs
const getBlogs = (cat) => {
  if(!cat){
    cat='all';
  }
  return axios.get(`${apiURL}/blog/${cat}`)
    .then(result => {
      return result.data;
    })
    .catch(error => {
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data.error || 'An error occurred',
        };
      } else if (error.request) {
        return {
          status: 500,
          message: 'No response from server',
        };
      } else {
        return {
          status: 500,
          message: 'Error in setting up the request',
        };
      }
    });
};

// Create a new blog
const createBlog = (data) => {
  return axios.post(`${apiURL}/blog`, data)
    .then(result => {
      return { status: result.status, data: result.data };
    })
    .catch(error => {
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data.error || 'An error occurred',
        };
      } else if (error.request) {
        return {
          status: 500,
          message: 'No response from server',
        };
      } else {
        return {
          status: 500,
          message: 'Error in setting up the request',
        };
      }
    });
};

// Get blog by ID
const getBlogById = (id) => {
  return axios.get(`${apiURL}/blogbyid/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(error => {
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data.error || 'An error occurred',
        };
      } else if (error.request) {
        return {
          status: 500,
          message: 'No response from server',
        };
      } else {
        return {
          status: 500,
          message: 'Error in setting up the request',
        };
      }
    });
};



const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  return axios.post(`${apiURL}/blogimage`, formData, config)
    .then(result => {
      return result.data;
    })
    .catch(error => {
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data.error || 'An error occurred',
        };
      } else if (error.request) {
        return {
          status: 500,
          message: 'No response from server',
        };
      } else {
        return {
          status: 500,
          message: 'Error in setting up the request',
        };
      }
    });
};


export { getBlogs, createBlog, getBlogById,uploadFile };
