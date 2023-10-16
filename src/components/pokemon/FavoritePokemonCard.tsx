
import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export const FavoritePokemonCard = ({ id, }: { id: number }) => {
    const router = useRouter()
    const handleClick = ()=>{
        router.push(`/pokemon/${id}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={handleClick}>
            <Card hoverable clickable className='card p-10'>
                <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={'100%'} height={140} />
            </Card>
        </Grid>
    )
}
