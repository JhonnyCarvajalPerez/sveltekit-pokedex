import { FC } from 'react'
import { Grid } from '@nextui-org/react'
import { FavoritePokemonCard } from './'

interface Props {
    favoritePokemos: number[]
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemos }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start' >
            {
                favoritePokemos.map(id => (
                    <FavoritePokemonCard key={id} id={id} />
                ))
            }
        </Grid.Container>
    )
}
