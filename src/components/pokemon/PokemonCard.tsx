import { SmallPokemon } from '@/interfaces'
import { Card, Grid, Row } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props {
  pokemon: SmallPokemon;
}
export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const { id, img, name } = pokemon;
  const onClick = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={onClick} className='card'>
        <Card.Body className='p-1'>
          <Card.Image src={img} width='100%' height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <span className='capitalize'>{name}</span>
            <span>#{id}</span>
          </Row>
        </Card.Footer>
      </Card>

    </Grid>
  )
}
