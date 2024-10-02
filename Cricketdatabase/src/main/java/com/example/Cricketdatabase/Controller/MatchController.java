package com.example.Cricketdatabase.Controller;

import com.example.Cricketdatabase.Exception.MatchNotFound;
import com.example.Cricketdatabase.Model.Match;
import com.example.Cricketdatabase.Repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000","https://cricket-tournament-nine.vercel.app"})
public class MatchController {
    @Autowired
    private MatchRepository matchRepository;
    @PostMapping("/match")
    Match newMatch(@RequestBody Match newMatch){
        return matchRepository.save(newMatch);
    }
    @GetMapping("/getmatch")
    List<Match> getMatches(){
        return matchRepository.findAll();
    }

   @GetMapping("/match/{id}")
    Match getmatchbyid(@PathVariable Long id){
       return matchRepository.findById(id).orElseThrow(()->new MatchNotFound(id));
   }
   @PutMapping("/match/{id}")
    Match updateMatch(@RequestBody Match newMatch,@PathVariable Long id){
       return matchRepository.findById(id).map(match -> {
           match.setId(newMatch.getId());
           match.setDate(newMatch.getDate());
           match.setStatus(newMatch.getStatus());
           match.setVenue(newMatch.getVenue());
           match.setTeam2_id(newMatch.getTeam2_id());
           match.setTeam1_id(newMatch.getTeam1_id());
           return matchRepository.save(match);
       }).orElseThrow(()->new MatchNotFound(id));
   }

   @DeleteMapping("/match/{id}")
    String deleteMatch(@PathVariable Long id){
       if (!matchRepository.existsById(id)) {
           throw new MatchNotFound(id);
       }
       matchRepository.deleteById(id);
       return "Match details deleted successfully";
   }
}
