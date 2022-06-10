export default function specialAttacks({ special }) {
  const arrAttacks = [];
  /* eslint-disable-next-line */
  for (const attack of special) {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = attack;
    arrAttacks.push({
      id, name, description, icon,
    });
  }
  return arrAttacks;
}
