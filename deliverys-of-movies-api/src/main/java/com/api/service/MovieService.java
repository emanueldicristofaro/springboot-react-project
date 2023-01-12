package com.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.api.converter.ConverterMovie;
import com.api.entity.Movie;
import com.api.model.MovieModel;
import com.api.repository.MovieRepository;

import java.util.List;

@Service("serviceMovie")
public class MovieService {
	
	@Autowired
	@Qualifier("repositoryMovie")
	private MovieRepository movieRepository;
	
	@Autowired
	@Qualifier("converterMovie")
	private ConverterMovie converterMovie;

	public MovieService(MovieRepository movieRepository, ConverterMovie converterMovie) {
		this.movieRepository = movieRepository;
		this.converterMovie = converterMovie;
	}

	public List<MovieModel> all(){

		List<Movie> listMovies = movieRepository.findAll();
		List<MovieModel> listMovieModel = converterMovie.convertList(listMovies);
		return listMovieModel;

	}

	public MovieModel getMovie(long id){

		Movie movie = movieRepository.findById(id);
		MovieModel movieModel = converterMovie.convertMovieToModel(movie);

		return movieModel;
	}
}
