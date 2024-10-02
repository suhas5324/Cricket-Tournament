package com.example.Cricketdatabase.Exception;
import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class MatchNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(MatchNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
public Map<String,String> exceptionHandler(MatchNotFound e){
Map<String,String> error=new HashMap<>();
error.put("error message",e.getMessage());
return error;
}

}
