package com.api.model;

import com.api.entity.Movie;
import com.api.entity.Review;

import java.util.Date;

public class ReviewModel {

    private long id;

    private String user;

    private String description;

    private Date date;

    Movie movie;

    public ReviewModel(){}

    public ReviewModel(Review review){

        this.id = review.getId();
        this.user = review.getUser();
        this.description = review.getDescription();
        this.date = review.getDate();
        this.movie = review.getMovie();
    }

    public ReviewModel(long id, String user, String description, Date date, Movie movie) {
        this.id = id;
        this.user = user;
        this.description = description;
        this.date = date;
        this.movie = movie;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

}
