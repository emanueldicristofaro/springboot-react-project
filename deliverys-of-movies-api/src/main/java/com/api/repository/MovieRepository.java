package com.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.entity.Movie;

import java.io.Serializable;

@Repository("repositoryMovie")
public interface MovieRepository extends JpaRepository<Movie, Serializable>  {

    Movie findById(long id);

}
