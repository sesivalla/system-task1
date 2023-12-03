// src/DataTable.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const DataTable = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps, { fetchData })(DataTable);
