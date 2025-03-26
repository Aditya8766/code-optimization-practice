import React, { useEffect, useState, Suspense } from "react";
import { Box, Skeleton, TextField } from "@mui/material";

const PracticeContent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const api = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(api)
      .then(async (data) => {
        const res = await data.json();
        setData(res.products);
        setInitialLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setInitialLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [search]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearch(value);
  };

  const filteredData = data.filter((d) =>
    d.title.toLowerCase().includes(debouncedSearch)
  );

  const renderSkeletons = (count = 6, height = 40) => (
    <Box display="flex" flexDirection="column" gap={2} p={2}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} variant="rectangular" height={height} />
      ))}
    </Box>
  );

  if (initialLoading) {
    return renderSkeletons();
  }

  return (
    <Box p={2}>
      <TextField
        onChange={handleInputChange}
        type="search"
        label="Search by title"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      {loading ? (
        renderSkeletons(4, 30)
      ) : filteredData.length ? (
        filteredData.map((d) => (
          <Box key={d.id} className="box" mb={1} p={2} bgcolor="#f4f4f4" borderRadius={1}>
            {d.title}
          </Box>
        ))
      ) : (
        <Box>No results found.</Box>
      )}
    </Box>
  );
};

const Practice = () => {
  return (
    <Suspense fallback={<Box p={2}><Skeleton variant="text" /></Box>}>
      <PracticeContent />
    </Suspense>
  );
};

export default Practice;
