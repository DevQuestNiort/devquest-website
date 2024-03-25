export interface Slot {
    key: string,
    start: string,
    type: 'opening' | 'keynote' | 'lunch' | 'break' | 'quickie' | 'conference'| 'codelab' | 'party',
    display: {
        row: number,
        size: number,
        notForCodelab?: boolean
    }
}