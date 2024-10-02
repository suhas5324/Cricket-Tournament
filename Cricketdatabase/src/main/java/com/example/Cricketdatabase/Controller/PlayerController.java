package com.example.Cricketdatabase.Controller;

import com.example.Cricketdatabase.Exception.MatchNotFound;
import com.example.Cricketdatabase.Exception.PlayerNotFound;
import com.example.Cricketdatabase.Model.Match;
import com.example.Cricketdatabase.Model.Player;
import com.example.Cricketdatabase.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PlayerController {
    @Autowired
    private PlayerRepository playerRepository;
    @PostMapping("/player")
    Player newPlayer(@RequestBody Player newPlayer){
        return playerRepository.save(newPlayer);
    }
    @GetMapping("/getplayer")
    List<Player> getPlayers(){
        return playerRepository.findAll();
    }
    @GetMapping("/player/{player_id}")
    Player getplayerbyid(@PathVariable Long player_id){
        return playerRepository.findById(player_id).orElseThrow(()->new PlayerNotFound(player_id));
    }
    @PutMapping("/player/{player_id}")
    Player updatePlayer(@RequestBody Player newPlayer,@PathVariable Long player_id){
        return playerRepository.findById(player_id).map(player -> {
            player.setPlayer_id(newPlayer.getPlayer_id());
            player.setTeam_id(newPlayer.getTeam_id());
            player.setAge(newPlayer.getAge());
            player.setPlayer_name(newPlayer.getPlayer_name());
            player.setRole(newPlayer.getRole());
            return playerRepository.save(player);
        }).orElseThrow(()->new PlayerNotFound(player_id));
    }

    @DeleteMapping("/player/{player_id}")
    String deletePlayer(@PathVariable Long player_id){
        if(!playerRepository.existsById(player_id)){
            throw new PlayerNotFound(player_id);
        }
        playerRepository.deleteById(player_id);
        return "Player details deleted successfully";
    }
}
