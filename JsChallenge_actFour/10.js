function ranking(jogos) {
        const times = {};
      
        // Itera sobre cada jogo e atualiza o objeto times com os pontos e gols marcados e sofridos de cada time
        jogos.forEach(jogo => {
          const time1 = jogo.Time1;
          const time2 = jogo.Time2;
          const p1 = jogo.P1;
          const p2 = jogo.P2;
      
          if (!times[time1]) {
            times[time1] = {
              Time: time1,
              P: 0,
              J: 0,
              V: 0,
              E: 0,
              D: 0,
              GP: 0,
              GC: 0,
              SG: 0
            };
          }
          if (!times[time2]) {
            times[time2] = {
              Time: time2,
              P: 0,
              J: 0,
              V: 0,
              E: 0,
              D: 0,
              GP: 0,
              GC: 0,
              SG: 0
            };
          }
      
          times[time1].P += p1 > p2 ? 3 : p1 === p2 ? 1 : 0;
          times[time2].P += p2 > p1 ? 3 : p2 === p1 ? 1 : 0;
          times[time1].J++;
          times[time2].J++;
          times[time1].V += p1 > p2 ? 1 : 0;
          times[time2].V += p2 > p1 ? 1 : 0;
          times[time1].E += p1 === p2 ? 1 : 0;
          times[time2].E += p2 === p1 ? 1 : 0;
          times[time1].D += p1 < p2 ? 1 : 0;
          times[time2].D += p2 < p1 ? 1 : 0;
          times[time1].GP += p1;
          times[time2].GP += p2;
          times[time1].GC += p2;
          times[time2].GC += p1;
          times[time1].SG = times[time1].GP - times[time1].GC;
          times[time2].SG = times[time2].GP - times[time2].GC;
        });
      
        // Converte o objeto times em um array e ordena a classificação com base nos critérios de desempate
        const classificacao = Object.values(times);
        classificacao.sort((a, b) => {
          if (a.P !== b.P) return b.P - a.P;
          if (a.V !== b.V) return b.V - a.V;
          if (a.SG !== b.SG) return b.SG - a.SG;
          return b.GP - a.GP;
        });
      
        return classificacao;
      }