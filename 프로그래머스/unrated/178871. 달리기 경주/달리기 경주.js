function solution(players, callings) {
    // players를 통해 각 플레이어 별 몇등인지 객체로 구조화한다.
    const obj = {};
    players.forEach((player, rank) => {
        obj[player] = rank;
    })
    
    // caliings 반복문을 통해 각 플레이어 별 등수를 기록한다.
    callings.forEach((player) => {
        const rank = obj[player];
        obj[player] = rank - 1;
        
        const switchedPlayer = players[rank - 1];
        obj[switchedPlayer] = rank;
        
        players[rank] = switchedPlayer;
        players[rank-1] = player;
    })
    
    return players
}