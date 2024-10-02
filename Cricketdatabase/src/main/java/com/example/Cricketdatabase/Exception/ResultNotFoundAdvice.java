package com.example.Cricketdatabase.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ResultNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ResultNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> exceptionHandler(ResultNotFound e) {
        Map<String, String> error = new HashMap<>();
        error.put("error message", e.getMessage());
        return error;
    }
}
