import katex from 'katex';
import 'katex/dist/katex.min.css';

interface KatexProps {
  math: string; // LaTeX 字符串
  inline?: boolean; // 是否为行内公式
}

const Katex: React.FC<KatexProps> = ({ math, inline = false }) => {
  const html = katex.renderToString(math, {
    throwOnError: false, // 遇到错误时不抛出异常
    displayMode: !inline, // 是否以块级模式显示公式
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Katex;
