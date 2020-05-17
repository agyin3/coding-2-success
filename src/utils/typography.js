import Typography from 'typography'

const typography = new Typography({
    title: 'coding-2-success',
    baseFontSize: '10px',
    scaleRatio: 20,
    baseLineHeight: 1.5,
    googleFonts: [
        {
            name: 'Montserrat',
            styles: [
                '400',
            ]
        },
        {
            name: 'Teko',
            styles: [
                '400'
            ]
        }
    ],
    headerFontFamily: ['Teko', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Montserrat', 'Arial', 'sans-serif']
})

export const { scale, rhythm, options } = typography
export default typography
