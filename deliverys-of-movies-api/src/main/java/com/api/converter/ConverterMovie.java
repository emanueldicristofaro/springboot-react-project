package com.api.converter;

import org.springframework.stereotype.Component;

import com.api.entity.Movie;
import com.api.model.MovieModel;

import java.util.ArrayList;
import java.util.List;

@Component("converterMovie")
public class ConverterMovie {

	public MovieModel convertMovieToModel(Movie movie){

		MovieModel movieModel = new MovieModel();
		movieModel.setId(movie.getId());
		movieModel.setName(movie.getName());
		movieModel.setDescription(movie.getDescription());
		movieModel.setAverage(movie.getAverage());
		movieModel.setPath(movie.getPath());

		return movieModel;
	}

	public List<MovieModel> convertList(List<Movie> movie){

		List<MovieModel> moviesModel = new ArrayList<>();

		for(Movie mov: movie){

			moviesModel.add(new MovieModel(mov));
		}

		return moviesModel;
	}

}
