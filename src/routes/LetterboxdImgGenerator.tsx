import React from "react"
import { StyledH2, StyledLabel, StyledInput, StyledButton, StyledLink } from "../components/Styled"

export default function LetterboxdImgGenerator() {
    // state
    const [downloadHref, setDownloadHref] = React.useState('')
    const [downloadButtonDisabled, setDownloadButtonDisabled] = React.useState(true)

    // refs
    const nameInputRef = React.useRef<HTMLInputElement>(null)
    const starsInputRef = React.useRef<HTMLSelectElement>(null)
    const imgSrcInputRef = React.useRef<HTMLInputElement>(null)
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const downloadLinkRef = React.useRef<HTMLAnchorElement>(null)
    const defaultCanvasHeight = 486

    const generateImg = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')?.toString()
        const rating = formData.get('rating')?.toString()
        const imgUrl = formData.get('img')?.toString()

        if (canvasRef.current !== null && !!name && !!rating && !!imgUrl) {
            const canvasEl = canvasRef.current;
            const canvas = canvasRef.current.getContext('2d')

            if (canvasEl && canvas) {
                const setCanvas = (height: number = defaultCanvasHeight) => {
                    canvasEl.height = height
                    canvas.textAlign = 'center'
                    canvas.font = 'bold 16px Tahoma, Helvetica, sans-serif'
                }

                canvas.clearRect(0, 0, 300, 500)

                // Title
                canvas.textAlign = 'center'
                canvas.font = 'bold 16px Tahoma, Helvetica, sans-serif'
                canvas.fillStyle = 'white'
                const strLen = name.length
                let strLines = []
                let newLine = ''
                if (strLen <= 35) {
                    setCanvas()
                    canvas.fillText(name, 150, 430)
                } else {
                    name.split(' ').forEach(word => {
                        // if it would be too long, start a new line
                        if ((newLine.length + word.length + 1) > 35) {
                            strLines.push(newLine)
                            newLine = word
                        } else {
                            newLine === '' ? newLine += word : newLine += ' ' + word
                        }
                    })
                    strLines.push(newLine)
                    setCanvas(defaultCanvasHeight + (8 * strLines.length))
                    strLines.forEach((line, i) => {
                        canvas.fillText(line, 150, 430 + (i * 16))
                    })
                }

                // Image
                const img = new Image(200, 300)
                img.src = imgUrl
                img.onload = function () {
                    canvas.drawImage(img, 25, 0, 250, 400)
                }

                // Stars
                const stars = '⭐️'.repeat(parseInt(rating))
                const top = !strLines.length ? 460 : 460 + ((strLines.length - 1) * 16)
                canvas.fillText(stars, 150, top)

                if (!!img && !!name) {
                    const canvasUrl = canvasEl.toDataURL()
                    const button = downloadLinkRef.current
                    if (!!button) {
                        setDownloadHref(canvasUrl)
                        setDownloadButtonDisabled(false)
                    }
                }
            }
        }

    }

    const prefill = () => {
        nameInputRef.current !== null ? nameInputRef.current.value = 'Spirited Away' : null
        starsInputRef.current !== null ? starsInputRef.current.value = '4' : null
        imgSrcInputRef.current !== null ? imgSrcInputRef.current.value = 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpgmazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg' : null
    }

    return (
        <>
            <StyledH2>Letterboxd Image Generator</StyledH2>
            <p>Ever shared a Letterboxd review on Instagram Stories? The app makes an image and shares it.<br />How does that happen? I made one to find out:</p>

            <form onSubmit={generateImg} className="mb-8">
                <StyledLabel>
                    Film Name:
                    <StyledInput name="name" id="name" type="text" ref={nameInputRef} />
                </StyledLabel>
                <StyledLabel>
                    Stars:
                    <select className="border-red-100 border-2 p-2 rounded-lg ml-1" name="rating" id="rating" ref={starsInputRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </StyledLabel>
                <StyledLabel>
                    Film img src:
                    <StyledInput name="img" id="img" type="text" ref={imgSrcInputRef} />
                </StyledLabel>
                <div>
                    <StyledButton type="submit" role="primary" extraClasses={['mr-4']}>Generate</StyledButton>
                    <StyledButton type="button" onClick={prefill} role="secondary">Fill it for me</StyledButton>
                </div>
            </form>

            <div className="canvas">
                <canvas id="canvas" width="300" height={defaultCanvasHeight} ref={canvasRef} className="mb-8"></canvas>
                <StyledLink href={downloadHref} ref={downloadLinkRef} download="letterboxd_img" type="button" disabled={downloadButtonDisabled}>Download</StyledLink>
            </div>
        </>
    )
}
