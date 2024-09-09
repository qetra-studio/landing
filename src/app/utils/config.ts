type MoonsCirclesRow = ReadonlyArray<('+' | null)>;
type MoonsMatrix = ReadonlyArray<MoonsCirclesRow>

export const firstPhaseMatrix: MoonsMatrix = [
    [null, null, null, '+', '+', '+'],
    [null, '+', '+', '+'],
    ['+', '+', null],
    ['+', '+', null],
    [null, '+', '+', '+'],
    [null, null, null, '+', '+', '+']
] as const
