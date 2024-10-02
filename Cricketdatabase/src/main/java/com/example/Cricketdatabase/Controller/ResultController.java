package com.example.Cricketdatabase.Controller;

import com.example.Cricketdatabase.Exception.ResultNotFound;
import com.example.Cricketdatabase.Exception.TeamNotFound;
import com.example.Cricketdatabase.Model.Result;
import com.example.Cricketdatabase.Repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000","https://cricket-tournament-nine.vercel.app"})
public class ResultController {
    @Autowired
    private ResultRepository resultRepository;
    @PostMapping("/result")
    Result newResult(@RequestBody Result newResult){
        return resultRepository.save(newResult);
    }
    @GetMapping("/getresult")
    List<Result> getResult(){
        return resultRepository.findAll();
    }

    @GetMapping("/result/{teamid}")
    Result getresultbyid(@PathVariable Long teamid){
        return resultRepository.findById(teamid).orElseThrow(()->new ResultNotFound(teamid));
    }
    @PutMapping("/result/{teamid}")
    Result updateResult(@RequestBody Result newResult,@PathVariable Long teamid){
        return resultRepository.findById(teamid).map(result -> {
            result.setMatchid(newResult.getMatchid());
            result.setWon(newResult.getWon());
            result.setLost(newResult.getLost());
            result.setWickets(newResult.getWickets());
            result.setRuns(newResult.getRuns());
            return resultRepository.save(result);
        }).orElseThrow(()->new ResultNotFound(teamid));
    }

    @DeleteMapping("/result/{teamid}")
    String deleteResult(@PathVariable Long teamid){
        if(!resultRepository.existsById(teamid)){
            throw new ResultNotFound(teamid);
        }
        resultRepository.deleteById(teamid);
        return "Result details deleted successfully";
    }
}
