<script lang="ts">
    import Card from "@smui/card";
    import {
        Chart as ChartJS,
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend,
        registerables,
    } from "chart.js";
    import { stringify } from "postcss";
    import { Radar } from "react-chartjs-2";

    export let pokemon: any; //passed prop
    const { stats } = pokemon;
    const cleanedStats = stats.map((stat: any) => stat.base_stat);
    const maxStat = Math.max(...cleanedStats) + 10;
    const data = {
        labels: [
            "HP",
            "Atack",
            "Defense",
            'Special-attack"',
            "Special-defense",
            "Speed",
        ],
        datasets: [
            {
                label: "Pokémon stats",
                data: cleanedStats,
                backgroundColor: "rgba(1, 1, 150, 0.2)",
                borderColor: "rgba(255, 255, 255, 255)",
                borderWidth: 1.5,
                color: "white",
            },
        ],
    };
    const options: any = {
        plugins: {
            legend: {
                labels: {
                    color: "white",
                    font: {
                        size: 20,
                    },
                },
            },
        },
        scales: {
            r: {
                max: Math.round(maxStat / 10) * 10,
                min: 0,
                ticks: {
                    stepSize: 20,
                    color: "white",
                    backdropColor: "rgb(22, 21, 21)",
                },
                pointLabels: {
                    color: "white",
                    font: {
                        size: 12,
                        style: "italic",
                    },
                },
                grid: {
                    color: "rgb(128, 0, 128)",
                    lineWidth: 3,
                },
                angleLines: {
                    color: "rgb(128, 0, 128)",
                    lineWidth: 2,
                },
            },
        },
    };
</script>

<Card>
    <div class="card-main" >Radar</div>
</Card>
<Card>
    <div class="card-banner">
        <h1>Abilities</h1>
            <ul>
              {#each pokemon.abilities as ability}
                <li class='flex flex-row gap-2 capitalize'>
                  <img src={'/pokeball-icon.png'} width={25} height={15} class={'icon'} alt='pokeball icon' />
                  {ability}
                </li>
              {/each}
            </ul>
            <h1>Common moves</h1>
            <ul class='columns-4'>
              {#each pokemon.moves as move }
                <li class='flex flex-row gap-2 capitalize'>
                  <img src={'/pokeball-icon.png'} width={25} height={15} class={'icon'} alt='pokeball icon' />
                  {JSON.stringify(move)}
                </li>
              {/each}
            </ul>
    </div>
</Card>

<style>
    .card-main {
        background-color: rgb(22, 21, 21) !important;
        border-color: gray;
        box-shadow: 5px 5px 10px rgba(174, 163, 163, 0.675) !important;
        width: 250px;
        height: 250px;
        padding: 15px !important;
        border-radius: 6px;
        text-align: center;
    }

    .card-main img {
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 150px;
    }
    .card-banner {
        background-color: rgb(22, 21, 21) !important;
        border-color: gray;
        box-shadow: 5px 5px 10px rgba(174, 163, 163, 0.675) !important;
        height: 250px;
        padding: 15px !important;
        border-radius: 6px;
        text-align: center;
        width: calc(100vw - 300px);
    }
    .card-banner img {
        width: 100px;
        height: 100px;
    }
    .card-banner .card-btn {
        background-image: linear-gradient(rgb(113, 47, 184), rgb(40, 34, 75));
        color: white;
    }
</style>
