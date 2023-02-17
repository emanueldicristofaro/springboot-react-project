package com.api.repository;

import com.api.entity.Review;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository("repositoryReview")
public interface ReviewRepository extends JpaRepository<Review, Serializable> {

    List<Review> findByMovieId(@Param("id") long id);
}
